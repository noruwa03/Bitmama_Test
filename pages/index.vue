<template>
  <div>
    <div class="container-lg mt-5">
      <!-- Form -->
      <div class="">
        <div class="row align-items-center justify-content-around">
          <div class="col-12 col-lg-6 col-sm-6">
            <div class="text-center h2 pb-3">Sign In</div>

            <label for="username">Username</label>
            <div class="form-group">
              <input
                id="username"
                v-model="username"
                type="text"
                class="form-control-input mt-2"
                placeholder="Username"
              />
            </div>

            <div class="form-group text-center">
              <button class="form-control-submit-button" @click="signin">
                Login
              </button>
            </div>

            <!-- end of form -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import { ref } from '@nuxtjs/composition-api'
import { useStore } from '../store'

export default {
  name: 'IndexPage',
  setup() {
    const username = ref('')

    const storeLogic = useStore()

    const signin = () => storeLogic.SIGN_IN_USER(username.value)

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
              confirmButtonColor: '#004360',

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

    return { username, signin }
  },
}
</script>

<style scoped>
.form-group {
  position: relative;
  margin-bottom: 1.25rem;
}

.form-control-input,
.form-control-textarea {
  width: 100%;
  padding-top: 0.875rem;
  padding-bottom: 0.875rem;
  padding-left: 1.5rem;
  border: 1px solid #cbcbd1;
  border-radius: 8px;
  background-color: #ffffff;
  font-size: 0.875rem;
  line-height: 1.5rem;
  -webkit-appearance: none; /* removes inner shadow on form inputs on ios safari */
}

.form-control-textarea {
  display: block;
  height: 14rem; /* used instead of html rows to normalize height between Chrome and IE/FF */
}

.form-control-input:focus,
.form-control-textarea:focus {
  border: 1px solid #a1a1a1;
  outline: none; /* Removes blue border on focus */
}

.form-control-input:hover,
.form-control-textarea:hover {
  border: 1px solid #a1a1a1;
}

.form-control-submit-button {
  display: inline-block;
  width: 80%;
  height: 3.25rem;
  border: 1px solid #004360;
  border-radius: 30px;
  background-color: #004360;
  color: #ffffff;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 0;
  cursor: pointer;
  transition: all 0.2s;
}

.form-control-submit-button:hover {
  border: 1px solid #004360;
  background-color: transparent;
  color: #004360;
}
</style>
