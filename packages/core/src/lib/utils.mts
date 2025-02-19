import wrapAnsi from 'wrap-ansi';

/**
 * Force line returns at specific width. This function is ANSI code friendly and it'll
 * ignore invisible codes during width calculation.
 * @param {string} content
 * @param {number} width
 * @return {string}
 */
export const breakLines = (content: string, width: number): string =>
  content
    .split('\n')
    .flatMap((line) =>
      wrapAnsi(line, width, { trim: false, hard: true })
        .split('\n')
        .map((line) => line.trimEnd()),
    )
    .join('\n');
