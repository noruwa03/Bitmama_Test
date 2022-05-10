import { defineStore } from 'pinia'
import Swal from 'sweetalert2'

const COOKIE_APP_KEY = document.cookie
  .split(';')
  .map((cookie) => cookie.split('='))
  .reduce(
    (accumulator, [key, value]) => ({
      ...accumulator,
      [key.trim()]: decodeURIComponent(value),
    }),
    {}
  )

export const useStore = defineStore('store', {
  state: () => ({
    nameCheck: COOKIE_APP_KEY.USERNAME,
    allSessions: [],
    logoutUser: '',
  }),
  actions: {
    SIGN_IN_USER(username) {
      // document.cookie = `gtc=838984;expires=Thu, 19 Dec 2030 12:00:00 GMT;`
      // document.cookie = `party=party after party;expires=Thu, 19 Dec 2030 12:00:00 GMT;`
      // document.cookie = `dorime=2998847749Trillion;expires=Thu, 19 Dec 2030 12:00:00 GMT;`

      if (this.nameCheck === undefined) {
        const isRequired = username.length === 0
        const isBetween = (length, min, max) => !(length < min || length > max)

        const min = 3
        const max = 25

        if (isRequired) {
          Swal.fire({
            // position: 'top-end',
            icon: 'info',
            title: `Username cannot be empty`,
            showConfirmButton: true,
            confirmButtonColor: '#004360',

            confirmButtonText: 'Ok',
            // timer: 1500,
          })
        } else if (!isBetween(username.length, min, max)) {
          Swal.fire({
            // position: 'top-end',
            icon: 'info',
            title: `Username must be between ${min} and ${max} characters.`,
            showConfirmButton: true,
            confirmButtonColor: '#004360',

            confirmButtonText: 'Ok',
            // timer: 1500,
          })
        } else {
          const usernameLowerCase = username.toLowerCase()
          document.cookie = `USERNAME=${usernameLowerCase};expires=Thu, 19 Dec 2030 12:00:00 GMT;`
          window.location = '/dashboard'

          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'successfully logged in',
            showConfirmButton: false,
            timer: 1500,
          })
        }
      } else if (!(this.nameCheck.toLowerCase() === username.toLowerCase())) {
        const isRequired = username.length === 0
        const isBetween = (length, min, max) => !(length < min || length > max)

        const min = 3
        const max = 25

        if (isRequired) {
          Swal.fire({
            // position: 'top-end',
            icon: 'info',
            title: `Username cannot be empty`,
            showConfirmButton: true,
            confirmButtonColor: '#004360',

            confirmButtonText: 'Ok',
            // timer: 1500,
          })
        } else if (!isBetween(username.length, min, max)) {
          Swal.fire({
            // position: 'top-end',
            icon: 'info',
            title: `Username must be between ${min} and ${max} characters.`,
            showConfirmButton: true,
            confirmButtonColor: '#004360',

            confirmButtonText: 'Ok',
            // timer: 1500,
          })
        } else {
          const usernameLowerCase = username.toLowerCase()
          document.cookie = `USERNAME=${usernameLowerCase};expires=Thu, 19 Dec 2030 12:00:00 GMT;`

          window.location = '/dashboard'
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'successfully logged in',
            showConfirmButton: false,
            timer: 1500,
          })
        }
      } else {
        let newWin
        const openPopup = () => {
          newWin = window.open('/dashboard')
          document.onmousedown = focusPopup
          document.onkeyup = focusPopup
          document.onmousemove = focusPopup
        }

        const focusPopup = () => {
          if (!newWin.closed) {
            newWin.focus()
          }
        }

        openPopup()
        // Swal.fire({

        //   icon: 'warning',
        //   title: `${this.nameCheck} is active`,
        //   showConfirmButton: true,
        //   confirmButtonColor: '#004360',

        //   confirmButtonText: 'Ok',

        // })
      }
    },

    GET_ALL_SESSION() {
      this.allSessions = document.cookie
        .split(';')
        .map((cookie) => cookie.split('='))
    },
    DELETE_SESSION(key) {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes',
      }).then((result) => {
        if (result.isConfirmed) {
          document.cookie = `${key}=;expires=Thu, 19 Dec 1920 12:00:00 GMT;path=/;`
          window.location = '/'
        }
      })
    },

    LOGOUT() {
      document.cookie = `USERNAME=;expires=Thu, 19 Dec 1920 12:00:00 GMT;path=/;`
      window.location = '/'

      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'successfully logged out',
        showConfirmButton: false,
        timer: 1500,
      })
    },
  },
})
