import { connect } from '../../../actions/src/component/lib'

import mapStateToProps from './input'
import mapDispatchToProps from './output'
import Component from './component'

export const ScreenIsSmall = connect(mapStateToProps, mapDispatchToProps)(Component)
