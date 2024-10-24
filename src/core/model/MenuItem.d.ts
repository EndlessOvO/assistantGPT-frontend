import IconGithub from "@/assets/svg/IconGithub.vue"
import IconGoogle from "@/assets/svg/IconGoogle.vue"
import IconHome from "@/assets/svg/IconHome.vue"
import IconLogo from "@/assets/svg/IconLogo.vue"
import IconTokens from "@/assets/svg/IconTokens.vue"
import IconAgent from "@/assets/svg/IconAgent.vue"
import IconOrder from "@/assets/svg/IconOrder.vue"
import IconChat from "@/assets/svg/IconChat.vue"
export interface MenuItem {
  title: string,
  icon: IconGitHub | IconGoogle | IconHome | IconLogo | IconTokens | IconAgent | IconOrder | IconChat,
}