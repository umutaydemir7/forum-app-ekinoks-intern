package payload.request;

import javax.validation.constraints.NotBlank;

public class SideTopicRequest {

    @NotBlank
    private static String sideTopicName;

    @NotBlank
    private static String userSent;

    @NotBlank
    private static String mainTopicName;

    public static String getSideTopicName() {
        return sideTopicName;
    }

    public  void setSideTopicName(String sideTopicName) {
        this.sideTopicName = sideTopicName;
    }

    public static String getUserSent() {
        return userSent;
    }

    public  void setUserSent(String userSent) {
        this.userSent = userSent;
    }

    public static String getMainTopicName() {
        return mainTopicName;
    }

    public  void setMainTopicName(String mainTopicName) {
        this.mainTopicName = mainTopicName;
    }
}
