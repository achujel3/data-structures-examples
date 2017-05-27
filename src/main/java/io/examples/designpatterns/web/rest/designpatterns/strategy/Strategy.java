package io.examples.designpatterns.web.rest.designpatterns.strategy;

public class Strategy {

    private int number;
    private String name;

    public Strategy(int number, String name) {
        this.number = number;
        this.name = name;
    }

    public int getNumber() {
        return number;
    }

    public void setNumber(int number) {
        this.number = number;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }


}
