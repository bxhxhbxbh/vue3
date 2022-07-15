import { createI18n } from 'vue-i18n'

// element-plus 中的语言配置
import elementEnLocale from 'element-plus/lib/locale/lang/en'
import elementZhLocale from 'element-plus/lib/locale/lang/zh-cn'

import commonZN from './zn-us'
import commonEN from './en-us'

// 语言配置整合
const messages = {
    'en-us': {
      ...commonEN,
      ...elementEnLocale
    },
    'zh-cn': {
      ...commonZN,
      ...elementZhLocale
    }
}

  // 创建 i18n
const i18n = createI18n({
    legacy: false,
    globalInjection: true,  // 全局模式，可以直接使用 $t
    locale: 'zh-cn',
    messages
})
  
export default i18n