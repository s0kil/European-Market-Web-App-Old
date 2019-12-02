<div>
	<h2>Join our mailing list</h2>
	<form>
		<input aria-label="Name" name="subscriberName" placeholder="Name">
		<input aria-label="Phone Number" name="subscriberPhone" placeholder="Phone Number">
		<input on:input="handleEmail(this.value)" aria-label="Email Address" name="subscriberEmail" placeholder="Email Address">
		<input class="submit" type="submit" value="Subscribe Now">
	</form>
</div>

<style>
  div {
    margin-top: 1em;
  }

  form {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  input {
    margin-right: 1em;
    flex: 1;
    padding: 0.6em;
    border-width: 1px;
    border-color: rgba(71, 102, 0, 1);
    background: transparent;
  }

  ::placeholder {
    color: rgb(0, 0, 0);
    opacity: 1;
  }

  .submit {
    flex: 1;
    background-color: rgba(229, 9, 9, 1);
    color: rgb(255, 255, 255);
    padding: 0.66em;
    border: 0px;
  }

  .submit:hover {
    cursor: pointer;
  }

  @media (max-width: 700px) {
    .submit, input {
      flex: none;
      width: 100%;
      margin-bottom: 0.4em;
    }
  }
</style>

<!-- PHONE: ng-pattern="/^\d+$/" -->

<script>
  // TODO : Validate Email
  export default {
    data() {
      return {
        emailValid: false
      };
    },
    methods: {
      validateEmail(email) {
        // Wix Email Validation RE Pattern
        const emailValRe = new RegExp(
          /^\b[a-zA-Z0-9.!#$%&amp;’*+\/=?^_`{|}~-]{1,50}@[a-zA-Z0-9-]{1,50}(?:\.[a-zA-Z0-9-]{2,20})+$/
        );
        return emailValRe.test(email);
      },

      handleEmail(email) {
        this.set({ emailValid: this.validateEmail(email) });
        console.log(this.get("emailValid"));
      }
    }
  };
</script>