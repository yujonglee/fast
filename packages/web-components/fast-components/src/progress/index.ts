import {
    BaseProgress as Progress,
    ProgressOptions,
    progressTemplate as template,
} from "@microsoft/fast-foundation";
import { progressStyles as styles } from "./progress.styles";

/**
 * The FAST Progress Element. Implements {@link @microsoft/fast-foundation#BaseProgress},
 * {@link @microsoft/fast-foundation#progressTemplate}
 *
 *
 * @public
 * @remarks
 * HTML Element: \<fast-progress\>
 */
export const fastProgress = Progress.compose<ProgressOptions>({
    baseName: "progress",
    template,
    styles,
    indeterminateIndicator1: `
        <span class="indeterminate-indicator-1" part="indeterminate-indicator-1"></span>
    `,
    indeterminateIndicator2: `
        <span class="indeterminate-indicator-1" part="indeterminate-indicator-1"></span>
    `,
});

/**
 * Styles for Progress
 * @public
 */
export const progressStyles = styles;
