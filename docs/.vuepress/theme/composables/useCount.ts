import { pageviewCount } from '@waline/client/dist/pageview'
import { onMounted } from 'vue'
export const useCount = (updateFlag: boolean = true): void => {
  onMounted(() => {
    setTimeout(() => {
      pageviewCount({
        serverURL: 'https://qyd.cblovecj.top/',
        update: updateFlag
      })
    }, 500)
  })
}
