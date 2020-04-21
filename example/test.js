import { cssToJss } from '../index'

const css = `
  .ninja {
    visibility : hidden;
    color      : black;
  }
`
var jss = cssToJss({ code: css })

console.log(JSON.stringify(jss, null, 2))
