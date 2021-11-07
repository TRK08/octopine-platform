import axios from 'axios'

const auth = {
  namespaced: true,
  state: {
    token: null,
    user: null,
    userInfo: null
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user
    },
    SET_TOKEN(state, token) {
      state.token = token;
    },
    SET_USER_INFO(state, user) {
      state.userInfo = user
    }
  },
  actions: {
    async REGISTR({ commit, dispatch }, user) {
      try {
        let requestParams = {
          nickname: user.nickname,
          email: user.email,
          password: user.password,
        }

        await axios
          .post(`https://octopine.pro/wp-json/oc/v1/registration`, user, { params: requestParams })
          .then(res => {
            console.log(res);
            if (res.data.code == 500) {
              dispatch('notify/ADD_NOTIFICATIONS', { text: res.data.msg }, { root: true })
            } else {
              dispatch('notify/ADD_NOTIFICATIONS', { text: 'Вы зарегистрировались' }, { root: true })
            }


          }).catch(err => {
            console.log(err, 'REGISTR ERROR');
          })
      }
      catch (err) {
        alert('Произошла ошибка, попробуйте позже')
      }
    },
    async AUTH_REQUEST({ commit, dispatch }, payload) {
      try {
        const { data } = await axios.post(`https://octopine.pro/wp-json/jwt-auth/v1/token`, payload)
        return dispatch('VALIDATE', data)
      }
      catch (err) {
        console.log(err, 'AUTH REQUEST ERROR');
      }
    },
    async VALIDATE({ commit, state, dispatch }, user) {
      if (user) {
        commit("SET_TOKEN", user.token);
        commit("SET_USER", user);
      }
      if (!state.user) {
        return
      }
      try {
        const response = await axios({
          url: 'https://octopine.pro/wp-json/jwt-auth/v1/token/validate',
          method: 'post',
          headers: {
            'Authorization': `Bearer ${user.token}`
          }
        });
        if (!state.user) {
          dispatch('notify/ADD_NOTIFICATIONS', { text: 'Успешный вход' }, { root: true })
        }
        dispatch('LOAD_USER_INFO', user.user_id)
        localStorage.setItem("user", JSON.stringify(user));
        commit("SET_TOKEN", user.token);
        commit("SET_USER", user);

      }
      catch (err) {
        localStorage.removeItem("user");
        commit("SET_TOKEN", null);
        commit("SET_USER", null);
      }
    },
    async SIGN_OUT({ commit, dispatch }) {
      dispatch('notify/ADD_NOTIFICATIONS', { text: 'Успешный выход' }, { root: true })
      localStorage.removeItem("user");
      commit("SET_TOKEN", null);
      commit("SET_USER", null);

    },
    LOAD_USER_INFO({ commit }, id) {
      axios.get(`https://octopine.pro/wp-json/oc/v1/get/user?user_id=4`).then(res => {
        commit('SET_USER_INFO', res.data)
      })
    },
  },
  getters: {
    getUser(state) {
      return state.user
    },
    getUserInfo(state) {
      return state.userInfo
    }
  },
}

export default auth