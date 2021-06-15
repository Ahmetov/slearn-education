package ahmetov.slearnbackend.model.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class TrainingSessionPartDto {
    private String subtitle;

    private String content;

    private Long trainingId;
}
