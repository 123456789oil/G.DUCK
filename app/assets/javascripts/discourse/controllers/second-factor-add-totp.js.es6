import ModalFunctionality from "discourse/mixins/modal-functionality";

export default Ember.Controller.extend(ModalFunctionality, {
  loading: false,
  secondFactorImage: null,
  secondFactorKey: null,
  showSecondFactorKey: false,
  errorMessage: null,

  onShow() {
    this.setProperties({
      errorMessage: null,
      secondFactorKey: null,
      secondFactorToken: null,
      showSecondFactorKey: false,
      secondFactorImage: null,
      loading: true
    });
    this.model
      .createSecondFactorTotp()
      .then(response => {
        if (response.error) {
          this.set("errorMessage", response.error);
          return;
        }

        this.setProperties({
          errorMessage: null,
          secondFactorKey: response.key,
          secondFactorImage: response.qr
        });
      })
      .catch(error => {
        this.send("closeModal");
        this.onError(error);
      })
      .finally(() => this.set("loading", false));
  },

  actions: {
    showSecondFactorKey() {
      this.set("showSecondFactorKey", true);
    },

    enableSecondFactor() {
      if (!this.secondFactorToken) return;
      this.set("loading", true);

      this.model
        .enableSecondFactorTotp(
          this.secondFactorToken,
          I18n.t("user.second_factor.totp.default_name")
        )
        .then(response => {
          if (response.error) {
            this.set("errorMessage", response.error);
            return;
          }
          this.markDirty();
          this.set("errorMessage", null);
          this.send("closeModal");
        })
        .catch(error => this.onError(error))
        .finally(() => this.set("loading", false));
    }
  }
});
