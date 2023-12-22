<script lang="ts">
  $: from = '';
  $: message = '';
  function submitForm() {
    if (from && message) {
      fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ from, message }),
      }).finally(() => {
        from = '';
        message = '';
      });
    }
  }
</script>

<section class="s1" id="contact">
  <div class="main-container">
    <h3 style="text-align: 'center'">Get In Touch</h3>

    <form id="contact-form" on:submit={submitForm}>
      <label for="email">Email</label>
      <input
        class="input-field"
        type="email"
        name="email"
        id="email"
        bind:value={from}
      />

      <label for="message">Message</label>
      <textarea
        class="input-field"
        name="message"
        id="message"
        style="resize: 'none'"
        bind:value={message}
      />

      <input id="submit-btn" type="submit" value="Send" />
    </form>
  </div>
</section>
