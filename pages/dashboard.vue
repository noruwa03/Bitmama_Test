<template>
  <div class="container-lg">
    <div class="navigation">
      <div class="user-box">
        <p class="ms-2 username">{{ currentUser.nameCheck }}</p>
      </div>
      <div class="menu-toggle" @click="menuToggle"></div>
      <ul class="menu">
        <li>
          <a href="#" class="" @click="logout"
            >Logout <i class="bi bi-box-arrow-right"></i
          ></a>
        </li>
        <li><nuxt-link class="mt-2" to="/">Sign in</nuxt-link></li>
      </ul>
    </div>

    <div class="mt-5 pt-5">
      <div class="text-center mt-3 mb-4">
        <h4>
          Admin: <span>{{ currentUser.nameCheck }}</span>
        </h4>
      </div>
      <div class="text-center mt-3 mb-4">
        <h4>Cookie Session Management</h4>
      </div>
      <div class="row align-items-center justify-content-center">
        <div
          v-for="sessions in currentUser.allSessions"
          :key="sessions[0]"
          class="col-sm-4 col-12 my-2"
        >
          <div class="customCard p-2">
            <div class="card-header text-center">
              <span class="fw-bold h5">Key:</span> {{ sessions[0] }}
            </div>
            <p class="my-3 text-center">
              <span class="fw-bold h5">Value:</span> {{ sessions[1] }}
            </p>
            <div class="form-group text-center">
              <button
                class="form-control-submit-button"
                @click="deleteSession(sessions[0], sessions[1])"
              >
                Logout session
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import { useStore } from '../store'
export default {
  name: 'MyDashboard',
  middleware({ redirect }) {
    const currentUser = useStore()

    if (currentUser.nameCheck == null) {
      return redirect('/')
    }
  },
  setup() {
    const currentUser = useStore()
    currentUser.GET_ALL_SESSION()

    const inactive = () => {
      const idleDurationSecs = 60 // X number of seconds

      let idleTimeout // variable to hold the timeout, do not modify

      const resetIdleTimeout = function () {
        // Clears the existing timeout
        if (idleTimeout) clearTimeout(idleTimeout)

        // Set a new idle timeout to load the redirectUrl after idleDurationSecs
        idleTimeout = setTimeout(
          () =>
            Swal.fire({
              // position: 'top-end',
              icon: 'warning',
              title: `This page is idle`,
              showConfirmButton: true,
              confirmButtonColor: '#6f42c1;',

              confirmButtonText: 'Ok',
              // timer: 1500,
            }),
          idleDurationSecs * 1000
        )
      }

      // Init on page load
      resetIdleTimeout()

      // Reset the idle timeout on any of the events listed below
      ;['click', 'touchstart', 'mousemove'].forEach((evt) =>
        document.addEventListener(evt, resetIdleTimeout, false)
      )
    }

    inactive()

    const menuToggle = () => {
      const navigation = document.querySelector('.navigation')
      navigation.classList.toggle('active')
    }

    const logout = () => currentUser.LOGOUT()
    const deleteSession = (key, value) => currentUser.DELETE_SESSION(key, value)

    return { currentUser, deleteSession, logout, menuToggle }
  },
}
</script>

<style scoped>
h4 span {
  text-transform: capitalize;
  color: var(--gray);
  font-weight: normal;
}
.customCard {
  background: var(--white);
  box-shadow: 0 25px 35px rgba(0, 0, 0, 0.1);
}
.navigation {
  position: fixed;
  padding: 0 1rem;
  top: 20px;
  right: 20px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  border-radius: 5px;
  background: var(--white);
  box-shadow: 0 25px 35px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: height 0.5s, width 0.5s;
  transition-delay: 0s, 0.75s;
  z-index: 100;
}

.navigation .user-box {
  position: relative;
  /* width: 60px; */
  height: 60px;
  display: flex;
  align-items: center;
  overflow: hidden;
  transition: 0.5s;
  transition-delay: 0.5s;
}

.navigation .user-box .username {
  font-size: 1.2rem;
  white-space: nowrap;
  text-transform: capitalize;
  color: var(--gray);
}

.navigation .user-box .image-box {
  position: relative;
  min-width: 60px;
  height: 60px;
  background: var(--white);
  border-radius: 50%;
  overflow: hidden;
  border: 10px solid var(--white);
}

.navigation .user-box .image-box img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.navigation .menu-toggle {
  position: relative;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.navigation .menu-toggle::before {
  content: '';
  position: absolute;
  width: 32px;
  height: 2px;
  background: var(--gray);
  transform: translateY(-10px);
  box-shadow: 0 10px var(--gray);
  transition: 0.5s;
}

.navigation .menu-toggle::after {
  content: '';
  position: absolute;
  width: 32px;
  height: 2px;
  background: var(--gray);
  transform: translateY(10px);
  transition: 0.5s;
}

.menu {
  position: absolute;
  width: 100%;
  height: calc(100% - 60px);
  margin-top: 60px;
  padding: 20px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.menu li {
  list-style: none;
}

.menu li a {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1rem;
  text-decoration: none;
  color: var(--gray);
}

.menu li a i {
  font-size: 1.3em;
}

.menu li a:hover {
  color: var(--purple);
}

.navigation.active .menu-toggle::before {
  transform: translateY(0px) rotate(45deg);
  box-shadow: none;
}

.navigation.active .menu-toggle::after {
  transform: translateY(0px) rotate(-45deg);
}

.navigation.active {
  /* width: 300px; */
  height: 10rem;
  transition: width 0.5s, height 0.5s;
  transition-delay: 0s, 0.75s;
}

.navigation.active .user-box {
  width: calc(100% - 60px);
  transition-delay: 0s;
}

.form-control-submit-button {
  display: inline-block;
  width: 80%;
  height: 3.25rem;
  border: 1px solid var(--purple);
  border-radius: 30px;
  background-color: var(--purple);
  color: #ffffff;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 0;
  cursor: pointer;
  transition: all 0.2s;
}

.form-control-submit-button:hover {
  border: 1px solid var(--purple);
  background-color: transparent;
  color: var(--purple);
}
</style>