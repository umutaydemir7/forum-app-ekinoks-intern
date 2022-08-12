package payload.request;

import javax.validation.constraints.NotBlank;

public class CommentRequest {


    @NotBlank
    private static String comment;

    @NotBlank
    private static String user;

    @NotBlank
    private static String discussionName;

    public static String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public static String getUser() {
        return user;
    }

    public void setUser(String user) {
        this.user = user;
    }

    public static String getDiscussionName() {
        return discussionName;
    }

    public void setDiscussionName(String discussionName) {
        this.discussionName = discussionName;
    }
}
