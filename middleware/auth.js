export default function ({ app, redirect }) {
  if (app.$fire.auth.currentUser !== null) {
      // User is logged in
    }else{
      // User is not logged in
    // return redirect('/login')
    }
}

