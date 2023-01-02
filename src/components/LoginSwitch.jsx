import React from 'react'

const LoginSwitch = () => {
  return (
    <FormGroup>
    <FormControlLabel
      control={
        <Switch
          checked={auth}
          onChange={handleChange}
          aria-label="login switch"
        />
      }
      label={auth ? 'Logout' : 'Login'}
    />
  </FormGroup>
  )
}

export default LoginSwitch