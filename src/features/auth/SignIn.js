import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  authAsync,
  registerAsync,
  selectUser
} from './authSlice';
import styles from './Auth.module.css';

export function SignIn() {
  // const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({login: '', password: ''});

  return (
    <div>
      <div className={styles.row}>
        <input
          aria-label="Set increment amount"
          value={userData.login}
          onChange={e => setUserData(prev => ({...prev, login: e.currentTarget.value}))}
        />
        <input
          aria-label="Set increment amount"
          type="password"
          value={userData.password}
          onChange={e => setUserData(prev => ({...prev, password: e.currentTarget.value}))}
        />
        <button
          className={styles.button}
          onClick={() => dispatch(authAsync(userData))}
        >
          Sign in
        </button>
      </div>
    </div>
  );
}
