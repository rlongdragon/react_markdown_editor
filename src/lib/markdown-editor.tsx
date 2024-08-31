import React, { useRef, useState, useEffect } from 'react';
import style from "./style.module.css"
import pageStyle from "./pageStyle.module.css"
import MonacoEditor from '@monaco-editor/react'
import render from './render';

const defaultValue = `# 標題測試
內文
## 二級標題
內文
### 三級標題
內文
#### 四級標題
##### 五級標題
###### 六級標題

**周寧縣文物保護單位**是[福建省寧德市](#)周寧縣境內的縣級文物保護單位。周寧縣轄境在歷史上長期屬寧德縣，中華民國時期成為周墩特種區，並於1945年升格為縣。作為福建省海拔最高的縣份，周寧縣境內有數十處具有歷史意義的*文物與遺址*。截至2017年1月，周寧縣先後公布了4批、63處縣級文物保護單位，


::: success 
其中已升格為全國重點文物保護單位的有3處，已升格為福建省文物保護單位的有7處。
:::

::: info
自1983年至2016年，周寧縣人民政府先後公布了四批縣級文物保護單位，首批文物保護單位公布於1983年10月23日
:::

::: warning
本章節統計周寧縣境內各鄉鎮的縣級文物保護單位數量，包括升格為國、省級文物保護單位者，統計數據中同時位於多個鄉鎮的單位（寶豐銀礦遺址）只在該文保所在地址寫出的首個鄉鎮計1處，其他鄉鎮不計；被重複公布的1處文物保護單位（位於李墩鎮的際會林公宮）則不重複計入數據。
:::

::: danger
是奉祀林公忠平王的宮廟，始建於清朝嘉慶二十三年（1818年），其後多次重修，2010年村民募資大修並加構前宇坪，建築坐東朝西，面積300平方米，有大廳、戲台和天井等結構，大廳面闊三間、進深六柱，穿斗、抬梁混合式減中柱磚木結構懸山頂，建築東側有祀奉林公忠平王的神龕，天井則與戲台以兩側雙層廂廊連接。
:::

::: spoiler
始建於清朝道光二十二年（1843年），1998年重修，建築坐東南朝西北，面積260平方米，有文昌閣、天井、廂廊和大廳等結構，大廳面闊五間、進深六柱，穿斗、抬梁混合式減中柱硬山頂，廳內祀奉孔子，文昌閣則為雙層雙檐四坡歇山頂，檐下則有多層斗拱。[3]
:::

> 自1983年至2016年，周寧縣人民政府先後公布了四批縣級文物保護單位，首批文物保護單位公布於1983年10月23日[1]，最新一批文物保護單位（第四批）公布於2016年12月26日[2]，其中3處現已合併、升格為全國重點文物保護單位（包括併入寶豐銀礦遺址子項的張彭八故居），已升格為福建省文物保護單位的有7處（包括併入麻嶺巡檢司遺址子項的麻嶺卷石亭）
>> 這些文物保護單位歷史年代最早者可追溯至宋代，最晚則建成於中華民國時期。[3]

- [ ] 123
`

export function MarkdownEditor({ width, height }: { width: string, height: string }) {
  let [content, setContent] = useState(defaultValue);
  // let [content, setContent] = useState("");
  const demoRef = useRef<HTMLDivElement>(null);

  // 將 pageStyle.page 的樣式提取出來
  const pageStyleString = Object.entries(pageStyle)
    .map(([key, value]) => `--${key}:${value};`)
    .join('');

  function handleEditorChange(value: any, event: any ) {
    setContent(value);
  }

  useEffect(() => {
    if (demoRef.current) {
      demoRef.current.innerHTML = render(content);

      // 使用 ::before 伪元素插入樣式
      demoRef.current.style.setProperty(
        '--page-styles', 
        JSON.stringify(pageStyleString) 
      );
    }
  }, [content]);

  return <>
    <div style={{ width: width, height: height }}>
      <div className={style.main} style={{height: height}}>
        <div className={style.toolbar}>
          <h3>TOOL BAR</h3>
        </div>
        <div className={style.main_editor} style={{height: 0}}>
          <div className={style.editor}>
            <MonacoEditor
              defaultValue={defaultValue}
              defaultLanguage="markdown"
              options={{
                fontSize: 18
              }}
              onChange={handleEditorChange}
            />
          </div>
          <div className={style.demo}>
            <div className={`${pageStyle.light} ${pageStyle.page}`} ref={demoRef}></div>
          </div>
        </div>
      </div>
    </div>
  </>
}