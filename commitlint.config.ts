import type { UserConfig } from '@commitlint/types'
import { RuleConfigSeverity } from '@commitlint/types'
const Configuration: UserConfig = {
extends: ['@commitlint/config-conventional'],
rules: {
 'scope-empty': [RuleConfigSeverity.Error, 'never'],
},
}
export default Configuration
