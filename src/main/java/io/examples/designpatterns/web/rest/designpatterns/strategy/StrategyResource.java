package io.examples.designpatterns.web.rest.designpatterns.strategy;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.LinkedList;

@RestController
@RequestMapping("/designpatterns")
public class StrategyResource {


    @GetMapping("/strategies")
    public StrategyList getStrategies() {
        StrategyList strategies = new StrategyList();
        strategies.getStrategies().add(new Strategy(1, "One"));
        strategies.getStrategies().add(new Strategy(2, "Two"));
        strategies.getStrategies().add(new Strategy(3, "Three"));
        return strategies;
    }

    class StrategyList {

        private LinkedList<Strategy> strategies = new LinkedList<>();

        public LinkedList<Strategy> getStrategies() {
            return strategies;
        }

        public void setStrategies(LinkedList<Strategy> strategies) {
            this.strategies = strategies;
        }
    }

}
