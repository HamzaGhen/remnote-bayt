import {
  declareIndexPlugin,
  type ReactRNPlugin,
} from '@remnote/plugin-sdk';

const storageKey = (remId: string) => `arabic-bayt:${remId}`;

async function baytRichText(plugin: ReactRNPlugin, sadr: string, ajuz: string) {
  return plugin.richText
    .text(sadr, ['Purple'])
    .text(ajuz, ['Orange'])
    .value();
}

async function onActivate(plugin: ReactRNPlugin) {
  await plugin.app.registerCSS(
    'arabic-bayt-columns',
    `
      .rn-text:has(.highlight-color--purple):has(:is(.highlight-color--blue, .highlight-color--green, .highlight-color--orange)),
      .rem-text:has(.highlight-color--purple):has(:is(.highlight-color--blue, .highlight-color--green, .highlight-color--orange)) {
        display: block !important;
        width: 592px !important;
        max-width: calc(100% - 32px) !important;
        margin-inline: auto !important;
        direction: rtl !important;
        text-align: center !important;
        white-space: nowrap !important;
        font-family: "Traditional Arabic", "Sakkal Majalla", "Geeza Pro", serif !important;
        font-size: 32px !important;
        line-height: 1.65 !important;
      }

      .rn-text:has(.highlight-color--purple):has(:is(.highlight-color--blue, .highlight-color--green, .highlight-color--orange)) :is(.highlight-color--purple, .highlight-color--blue, .highlight-color--green, .highlight-color--orange),
      .rem-text:has(.highlight-color--purple):has(:is(.highlight-color--blue, .highlight-color--green, .highlight-color--orange)) :is(.highlight-color--purple, .highlight-color--blue, .highlight-color--green, .highlight-color--orange) {
        display: inline-block !important;
        width: 280px !important;
        max-width: calc(50% - 16px) !important;
        min-width: 0 !important;
        box-sizing: border-box !important;
        vertical-align: middle !important;
        background: transparent !important;
        color: inherit !important;
        text-align: justify !important;
        text-align-last: justify !important;
        text-justify: inter-word !important;
        direction: rtl !important;
        white-space: normal !important;
      }

      .rn-text:has(.highlight-color--purple):has(:is(.highlight-color--blue, .highlight-color--green, .highlight-color--orange)) .highlight-color--purple,
      .rem-text:has(.highlight-color--purple):has(:is(.highlight-color--blue, .highlight-color--green, .highlight-color--orange)) .highlight-color--purple {
        margin-left: 16px !important;
      }

      .rn-text:has(.highlight-color--purple) :is(.highlight-color--blue, .highlight-color--green, .highlight-color--orange),
      .rem-text:has(.highlight-color--purple) :is(.highlight-color--blue, .highlight-color--green, .highlight-color--orange) {
        margin-right: 16px !important;
      }

      .rn-text:has(.highlight-color--green),
      .rem-text:has(.highlight-color--green) {
        width: 808px !important;
      }

      .rn-text:has(.highlight-color--green) :is(.highlight-color--purple, .highlight-color--green),
      .rem-text:has(.highlight-color--green) :is(.highlight-color--purple, .highlight-color--green) {
        width: 380px !important;
        max-width: calc(50% - 24px) !important;
      }

      .rn-text:has(.highlight-color--green) .highlight-color--purple,
      .rem-text:has(.highlight-color--green) .highlight-color--purple {
        margin-left: 24px !important;
      }

      .rn-text:has(.highlight-color--green) .highlight-color--green,
      .rem-text:has(.highlight-color--green) .highlight-color--green {
        margin-right: 24px !important;
      }

      .rn-text:has(.highlight-color--orange),
      .rem-text:has(.highlight-color--orange) {
        width: 992px !important;
      }

      .rn-text:has(.highlight-color--orange) :is(.highlight-color--purple, .highlight-color--orange),
      .rem-text:has(.highlight-color--orange) :is(.highlight-color--purple, .highlight-color--orange) {
        width: 460px !important;
        max-width: calc(50% - 36px) !important;
      }

      .rn-text:has(.highlight-color--orange) .highlight-color--purple,
      .rem-text:has(.highlight-color--orange) .highlight-color--purple {
        margin-left: 36px !important;
      }

      .rn-text:has(.highlight-color--orange) .highlight-color--orange,
      .rem-text:has(.highlight-color--orange) .highlight-color--orange {
        margin-right: 36px !important;
      }

      /* Explicit standard rules for RemNote renderers that do not support
         nested :has(:is(...)) selectors. */
      .rn-text:has(.highlight-color--purple):has(.highlight-color--green),
      .rem-text:has(.highlight-color--purple):has(.highlight-color--green) {
        display: block !important;
        width: 848px !important;
        max-width: calc(100% - 32px) !important;
        margin-inline: auto !important;
        direction: rtl !important;
        text-align: center !important;
        white-space: nowrap !important;
        font-family: "Traditional Arabic", "Sakkal Majalla", "Geeza Pro", serif !important;
        font-size: 32px !important;
        line-height: 1.65 !important;
      }

      .rn-text:has(.highlight-color--green) :is(.highlight-color--purple, .highlight-color--green),
      .rem-text:has(.highlight-color--green) :is(.highlight-color--purple, .highlight-color--green) {
        display: inline-block !important;
        width: 400px !important;
        max-width: calc(50% - 24px) !important;
        box-sizing: border-box !important;
        vertical-align: middle !important;
        background: transparent !important;
        color: inherit !important;
        text-align: justify !important;
        text-align-last: justify !important;
        text-justify: inter-word !important;
        direction: rtl !important;
        white-space: nowrap !important;
      }

      /* Explicit wide rules. */
      .rn-text:has(.highlight-color--purple):has(.highlight-color--orange),
      .rem-text:has(.highlight-color--purple):has(.highlight-color--orange) {
        display: block !important;
        width: 1072px !important;
        max-width: calc(100% - 32px) !important;
        margin-inline: auto !important;
        direction: rtl !important;
        text-align: center !important;
        white-space: nowrap !important;
        font-family: "Traditional Arabic", "Sakkal Majalla", "Geeza Pro", serif !important;
        font-size: 32px !important;
        line-height: 1.65 !important;
      }

      .rn-text:has(.highlight-color--orange) :is(.highlight-color--purple, .highlight-color--orange),
      .rem-text:has(.highlight-color--orange) :is(.highlight-color--purple, .highlight-color--orange) {
        display: inline-block !important;
        width: 500px !important;
        max-width: calc(50% - 36px) !important;
        box-sizing: border-box !important;
        vertical-align: middle !important;
        background: transparent !important;
        color: inherit !important;
        text-align: justify !important;
        text-align-last: justify !important;
        text-justify: inter-word !important;
        direction: rtl !important;
        white-space: nowrap !important;
      }

      .rn-editor:has(.highlight-color--purple):has(:is(.highlight-color--blue, .highlight-color--green, .highlight-color--orange)) .rn-rem-bullet,
      .rn-editor:has(.highlight-color--purple):has(:is(.highlight-color--blue, .highlight-color--green, .highlight-color--orange)) .rn-bullet-container {
        visibility: hidden !important;
      }

    `,
  );

  await plugin.app.registerCommand({
    id: 'format-arabic-bayt',
    name: 'Format Arabic Bayt',
    action: async () => {
      try {
        const focusedRem = await plugin.focus.getFocusedRem();
        const focusedText = await plugin.editor.getFocusedEditorText();

        if (!focusedRem || !focusedText) {
          await plugin.app.toast('Place the cursor inside a Rem containing الصدر || العجز.');
          return;
        }

        const plainText = await plugin.richText.toString(focusedText);
        const separatorIndex = plainText.indexOf('||');

        if (separatorIndex === -1) {
          await plugin.app.toast('Add || between the صدر and العجز first.');
          return;
        }

        const sadr = plainText.slice(0, separatorIndex).trim();
        const ajuz = plainText.slice(separatorIndex + 2).trim();

        if (!sadr || !ajuz) {
          await plugin.app.toast('Both sides of || must contain text.');
          return;
        }

        // Keep the verse itself in the Rem. Never replace user text with an
        // invisible placeholder: formatting must remain lossless even if the
        // surrounding UI changes.
        await plugin.storage.setSynced(storageKey(focusedRem._id), { sadr, ajuz });
        await focusedRem.setText(await baytRichText(plugin, sadr, ajuz));

        await plugin.app.toast('Arabic bayt formatted.');
      } catch (error) {
        console.error(error);
        await plugin.app.toast('Could not format this bayt. Check the development console.');
      }
    },
  });

  await plugin.app.toast('Arabic Bayt Formatter loaded');
}

async function onDeactivate(_: ReactRNPlugin) {}

declareIndexPlugin(onActivate, onDeactivate);
