package payload.request;

import javax.validation.constraints.NotBlank;

public class MainTopicRequest {

    @NotBlank
    private static String name;

    @NotBlank
    private static String userSent;


    public static String getName() {
        return name;
    }

    public  void setName(String name) {
        this.name = name;
    }

    public static String getUserSent() {
        return userSent;
    }

    public  void setUserSent(String userSent) {
        this.userSent = userSent;
    }
}
