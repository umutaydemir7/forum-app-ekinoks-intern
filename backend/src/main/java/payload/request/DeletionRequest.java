package payload.request;

import javax.validation.constraints.NotBlank;

public class DeletionRequest {

    @NotBlank
    private static String name;

    public static String getName() {
        return name;
    }

    public  void setName(String name) {
        this.name = name;
    }
}
