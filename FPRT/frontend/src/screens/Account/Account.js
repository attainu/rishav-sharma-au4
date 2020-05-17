import React, { Component } from 'react';

import AuthUserContext from '../../utils/AuthUserContext';
import withAuthorization from '../../utils/withAuthorization';
import { doPasswordUpdate } from '../../firebase/auth';

import { FormButton } from '../../components/Form/FormButton';
import { ErrorMessage } from '../../components/Error/ErrorMessage';
import { FormContainer } from '../../components/Form/FormContainer';

import { byPropKey } from '../../utils';
import { Form, Icon, Input } from 'antd';

const FormItem = Form.Item;

const INITIAL_STATE = {
  passwordOne: '',
  passwordTwo: '',
  error: null
};

class AccountScreen extends Component {
  state = { ...INITIAL_STATE };

  handleSubmit = event => {
    event.preventDefault();

    const { passwordOne } = this.state;

    return doPasswordUpdate(passwordOne)
      .then(() => {
        this.props.form.setFieldsValue({
          passwordOne: '',
          passwordTwo: ''
        });
      })
      .catch(error => {
        this.setState(byPropKey('error', error.message));
      });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { error } = this.state;
    return (
      <AuthUserContext.Consumer>
        {authUser => (
          <FormContainer>
            <h2>Account: {authUser.email}</h2>
            <div>
              <Form
                onSubmit={event => this.handleSubmit(event)}
                className="login-form"
              >
                <FormItem>
                  {getFieldDecorator('passwordOne', {
                    rules: [
                      { required: true, message: 'Please input your Password!' }
                    ]
                  })(
                    <Input
                      prefix={
                        <Icon
                          type="lock"
                          style={{ color: 'rgba(0,0,0,.25)' }}
                        />
                      }
                      onChange={event =>
                        this.setState(
                          byPropKey('passwordOne', event.target.value)
                        )
                      }
                      type="password"
                      placeholder="Password"
                    />
                  )}
                </FormItem>
                <FormItem>
                  {getFieldDecorator('passwordTwo', {
                    rules: [
                      { required: true, message: 'Please input your Password!' }
                    ]
                  })(
                    <Input
                      prefix={
                        <Icon
                          type="lock"
                          style={{ color: 'rgba(0,0,0,.25)' }}
                        />
                      }
                      onChange={event =>
                        this.setState(
                          byPropKey('passwordTwo', event.target.value)
                        )
                      }
                      type="password"
                      placeholder="Password"
                    />
                  )}
                </FormItem>
                <FormItem>
                  <FormButton type="primary" htmlType="submit">
                    Reset my password
                  </FormButton>
                </FormItem>
                <ErrorMessage>{error}</ErrorMessage>
              </Form>
            </div>
          </FormContainer>
        )}
      </AuthUserContext.Consumer>
    );
  }
}

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(Form.create()(AccountScreen));
