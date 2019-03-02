<script>

export default {
  false: 'FALSE',
  true: 'TRUE',
  loggedIn: () => {
    const isAdmin = localStorage.getItem('isAdmin');
    return isAdmin === this.true;
  },
  logIn: () => {
    localStorage.setItem('isAdmin', this.true);
  },
  logOut: () => {
    localStorage.setItem('isAdmin', this.false);
  },
};

</script>
