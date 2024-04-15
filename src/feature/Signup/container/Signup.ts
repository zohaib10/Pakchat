import { connect } from 'react-redux'
import { Signup as TargetComponent } from '../component'
import { navigate } from '../../Navigation'

const mapStateToProps = () => ({})

export const Signup = connect(mapStateToProps, { goToLogin: () => navigate('login') })(TargetComponent)
