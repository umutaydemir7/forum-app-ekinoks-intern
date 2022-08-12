package payload.request;

import javax.validation.constraints.NotBlank;

public class DiscussionRequest {

    @NotBlank
    private static String discussionName;

    @NotBlank
    private static String userSent;

    @NotBlank
    private static String sideTopicName;

    public static String getDiscussionName() {
        return discussionName;
    }

    public void setDiscussionName(String discussionName) {
        this.discussionName = discussionName;
    }

    public static String getUserSent() {
        return userSent;
    }

    public void setUserSent(String userSent) {
        this.userSent = userSent;
    }

    public static String getSideTopicName() {
        return sideTopicName;
    }

    public void setSideTopicName(String sideTopicName) {
        this.sideTopicName = sideTopicName;
    }


}
