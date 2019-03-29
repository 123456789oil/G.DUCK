import loadScript from "discourse/lib/load-script";
import { number } from "discourse/lib/formatter";

export default Ember.Component.extend({
  tagName: "canvas",
  type: "line",

  refreshChart() {
    const ctx = this.$()[0].getContext("2d");
    const model = this.get("model");
    const rawData = this.get("model.data");

    var data = {
      labels: rawData.map(r => r.x),
      datasets: [
        {
          data: rawData.map(r => r.y),
          label: model.get("title"),
          backgroundColor: `rgba(200,220,240,${
            this.get("type") === "bar" ? 1 : 0.3
          })`,
          borderColor: "#08C"
        }
      ]
    };

    const config = {
      type: this.get("type"),
      data: data,
      options: {
        responsive: true,
        tooltips: {
          callbacks: {
            title: context =>
              moment(context[0].xLabel, "YYYY-MM-DD").format("LL")
          }
        },
        scales: {
          yAxes: [
            {
              display: true,
              ticks: {
                callback: label => {
                  if (label >= 1) return number(label);
                },
                suggestedMin: 0
              }
            }
          ]
        }
      }
    };

    this._chart = new window.Chart(ctx, config);
  },

  didInsertElement() {
    loadScript("/javascripts/Chart.min.js").then(() =>
      this.refreshChart.apply(this)
    );
  }
});
