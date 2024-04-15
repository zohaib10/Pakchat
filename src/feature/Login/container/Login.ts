import { connect } from 'react-redux'
import { Login as TargetComponent } from '../component'
import { navigate } from '../../Navigation'

const mapStateToProps = () => ({})

export const Login = connect(mapStateToProps, {
  goToHomePage: () => navigate('home'),
  goToSignUp: () => navigate('signup'),
})(TargetComponent)
