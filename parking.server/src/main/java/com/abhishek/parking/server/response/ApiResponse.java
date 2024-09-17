package com.abhishek.parking.server.response;

public class ApiResponse<T> {
    private String type;
    private int status;
    private T data;

    public ApiResponse(String type, int status, T data) {
        this.type = type;
        this.status = status;
        this.data = data;
    }

    // Getters and Setters
    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public T getData() {
        return data;
    }

    public void setData(T data) {
        this.data = data;
    }
}

