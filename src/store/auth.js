import axios from 'axios'

const auth = {
  namespaced: true,
  state: {
    preload: true,
    token: null,
    user: null,
    userInfo: null
  },
  mutations: {
    PRELOADER(state) {
      state.preload = !state.preload
    },
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
    SET_PRELOAD({ commit }) {
      document.addEventListener('DOMContentLoaded', () => {
        commit('PRELOADER')
      })
      commit('PRELOADER')
    },
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
        dispatch('notify/ADD_NOTIFICATIONS', { text: 'Успешный вход' }, { root: true })
        return dispatch('VALIDATE', data)
      }
      catch (err) {
        dispatch('notify/ADD_NOTIFICATIONS', { text: 'Проверьте правильность введенных данных' }, { root: true })
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
        })
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
      dispatch('notify/ADD_NOTIFICATIONS', { text: 'Успешный выход, сейчас будете перенаправлены на главную страницу' }, { root: true })
      localStorage.removeItem("user");
      commit("SET_TOKEN", null);
      commit("SET_USER", null);
    },
    LOAD_USER_INFO({ commit }, id) {
      axios.get(`https://octopine.pro/wp-json/oc/v1/get/user?user_id=${id}`).then(res => {
        commit('SET_USER_INFO', res.data)
      })
    },
    async CHANGE_CABINET_PASSWORD({ state, dispatch }, pass) {
      const data = {
        "user_id": state.user.user_id,
        "password": pass
      }
      await axios.post('https://octopine.pro/wp-json/oc/v1/user/update/password', data).then(res => {
        dispatch('notify/ADD_NOTIFICATIONS', { text: 'Пароль успешно изменен' }, { root: true })
      }).catch(err => {
        console.log(err, 'CHANGE CABINET PASSWORD ERROR');
        dispatch('notify/ADD_NOTIFICATIONS', { text: 'При изменении пароля произошла ошибка' }, { root: true })
      })
    },
    async SEND_FORM_MESSAGE({ dispatch }, info) {
      await axios.post('https://octopine.pro/wp-json/contact-form-7/v1/contact-forms/17/feedback', info).then(res => {
        dispatch('notify/ADD_NOTIFICATIONS', { text: 'Письмо успешно отправлено' }, { root: true })
      }).catch(err => {
        console.log(err, 'SEND FORM MESSAGE ERROR');
        dispatch('notify/ADD_NOTIFICATIONS', { text: 'При отправке произошла ошибка' }, { root: true })
      })
    },
    async CHANGE_AVATAR({ dispatch }, data) {
      await axios.post("https://octopine.pro/wp-json/oc/v1/set/avatar", data).then(res => {
        console.log(res.data);
        dispatch('notify/ADD_NOTIFICATIONS', { text: 'Аватар успешно изменен' }, { root: true })
      }).catch(err => {
        console.log(err, 'CHANGE AVATAR ERROR');
        dispatch('notify/ADD_NOTIFICATIONS', { text: 'При изменении логотипа произошла ошибка' }, { root: true })
      })
    },
    async RESET_PASSWORD({ dispatch }, mail) {
      console.log(mail);
      await axios.post(`https://octopine.pro/wp-json/oc/v1/user/resetp?login=${mail}`).then(res => {
        console.log(res.data);
        if (res.data.code === '404') {
          dispatch('notify/ADD_NOTIFICATIONS', { text: 'Такой пользователь не найден' }, { root: true })
        } else {
          dispatch("popup/GET_POPUP_MODE", { mode: null }, { root: true })
          dispatch('notify/ADD_NOTIFICATIONS', { text: 'Ссылка отправлена на почту' }, { root: true })
        }
      }).catch(err => {
        console.log(err, 'RESET PASS ERROR');
        dispatch('notify/ADD_NOTIFICATIONS', { text: 'Произошла ошибка' }, { root: true })
      })
    },
    async SET_NEW_PASSWORD({ dispatch }, data) {
      await axios.post(`https://octopine.pro/wp-json/oc/v1/user/updatep?${data.key}&password=${data.pass}&id=${data.id}`).then(res => {
        dispatch('notify/ADD_NOTIFICATIONS', { text: 'Пароль успешно изменен' }, { root: true })
      }).catch(err => {
        console.log(err, 'SET NEW PASSWORD ERROR');
        dispatch('notify/ADD_NOTIFICATIONS', { text: 'Произошла ошибка' }, { root: true })
      })
    },
    async CHANGE_SOCIALS({ dispatch }, data) {
      await axios.post('https://octopine.pro/wp-json/oc/v1/post/social', data).then(res => {
        dispatch('notify/ADD_NOTIFICATIONS', { text: 'Данные успешно изменены' }, { root: true })
      }).catch(err => {
        console.log(err, 'CHANGE SOCIALS ERROR');
        dispatch('notify/ADD_NOTIFICATIONS', { text: 'Произошла ошибка' }, { root: true })
      })
    }
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