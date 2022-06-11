<template>

        <section id="login" class="py-5 mt-3">
            <div  class="container p-5 col-sm-6">
                <form class="needs-validation justify-content-center" novalidate>
                 
                  <div class="mb-3">
                    <label for="accountInput">Account</label>
                    <input
                      class="form-control"
                      type="text"
                      id="accountInput"
                      name="Account"
                      placeholder="Account"
                      required
                    />
                    <div class="invalid-feedback">請輸入帳號。</div>
                  </div>
                  <div class="mb-3">
                    <label for="passwordInput">Password</label>
                    <input
                      class="form-control"
                      type="password"
                      id="passwordInput"
                      name="password"
                      required
                    />
                    <div class="invalid-feedback">請輸入密碼。</div>
                  </div>
                 
                   
                   <div class="form-check">
                   <div class="d-flex justify-content-between">
                     <div class="">
                     <input class="form-check-input"
                      type="checkbox"
                      id="rememberMeCheckbox"
                      name="RememberMe"/>Remember Me
                    </div>
                  <a href="">Sign up</a>

                    </div>
                  
                  </div>
                  <button type="submit" class="btn btn-primary">Login</button>
               
               </form>

              </div>
          
             
        </section>

</template>

<script>


</script>

