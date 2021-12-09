
    const exampleGauge = {
      current: 0.4,
      min: 0.1,
      max: 0.9
    }

    const checkGaugeStatus = (gauge) => {
      // Code here!
      let inRange = false;
      const { current, min, max } = gauge;

      if(current >= min && current <= max) {
        inRange = true;
      }

      // Remember to return a value!
      return inRange;
    }

    let inRangeValue = checkGaugeStatus(exampleGauge);
    console.log(" Gauge: ", exampleGauge, " , inRange: ", inRangeValue);

    exampleGauge.current = 1.1;
    inRangeValue = checkGaugeStatus(exampleGauge);
    console.log(" Gauge: ", exampleGauge, " , inRange: ", inRangeValue);

    exampleGauge.current = 0.03;
    inRangeValue = checkGaugeStatus(exampleGauge);
    console.log(" Gauge: ", exampleGauge, " , inRange: ", inRangeValue);
