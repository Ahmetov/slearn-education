package ahmetov.slearnbackend.model.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class TrainingSessionDto {
    private String name;

    private String description;

    private Long courseId;
}
