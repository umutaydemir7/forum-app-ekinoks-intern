package payload.request;

import javax.validation.constraints.NotBlank;

public class TopicApproveRequest {

    @NotBlank
    private static String name;

    @NotBlank
    private static String status;

    public static String getName() {
        return name;
    }

    public  void setName(String name) {
        this.name = name;
    }


    public static String getStatus() {
        return status;
    }

    public  void setStatus(String status) {
        this.status = status;
    }




}
