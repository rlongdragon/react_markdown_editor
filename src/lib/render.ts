import markdownit from 'markdown-it'
import { abbr } from "@mdit/plugin-abbr"
import { alert } from "@mdit/plugin-alert"
import { align } from "@mdit/plugin-align"
import { attrs } from "@mdit/plugin-attrs"
import { container } from "@mdit/plugin-container"
import { dl } from "@mdit/plugin-dl"
import { figure } from "@mdit/plugin-figure"
import { footnote } from "@mdit/plugin-footnote"
import { imgLazyload } from "@mdit/plugin-img-lazyload"
import { imgMark } from "@mdit/plugin-img-mark"
import { imgSize } from "@mdit/plugin-img-size"
import { mark } from "@mdit/plugin-mark"
import { plantuml } from "@mdit/plugin-plantuml"
import { spoiler } from "@mdit/plugin-spoiler"
import { sub } from "@mdit/plugin-sub"
import { sup } from "@mdit/plugin-sup"
import { tab } from "@mdit/plugin-tab"
import { tasklist } from "@mdit/plugin-tasklist"

const md = markdownit({
  html: true,
  linkify: true,
  typographer: true,
  breaks: true,
})
  .use(abbr)
  .use(alert)
  .use(abbr)
  .use(alert)
  .use(align)
  .use(attrs)
  .use(container, { name: "success" })
  .use(container, { name: "info" })
  .use(container, { name: "warning" })
  .use(container, { name: "danger" })
  .use(container, {
    name: 'spoiler',
    openRender: (tokens, index, _options) => {
      console.log(0)
      var m = tokens[index].info.trim().slice(7).trim()

      return `<details>\n<summary>${m || "spoiler"}</summary>\n`;
    },
    closeRender: function () {return '</details>\n'}
  })
  .use(dl)
  .use(figure)
  .use(footnote)
  .use(imgLazyload)
  .use(imgMark)
  .use(imgSize)
  .use(mark)
  .use(plantuml)
  .use(spoiler)
  .use(sub)
  .use(sup)
  .use(tab)
  .use(tasklist)

export default (markdown: string): string => { return md.render(markdown) }