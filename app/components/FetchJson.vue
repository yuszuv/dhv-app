<script>
export default {
  props: ["url"],
  data() {
    return {
      response: null,
      loading: true
    }
  },
  created() {
    fetch(this.url, { headers: { 'Authorization': 'Bearer GO13TNBbf5jJ6Ts8xf64d8GetfpnLSaj' } })
      .then(response => response.json())
      .then(response => {
        this.response = response
        this.loading = false
      })
  },
  render() {
    return this.$scopedSlots.default({
      response: this.response,
      loading: this.loading
    })
  }
}

</script>
