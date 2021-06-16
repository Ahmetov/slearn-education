package ahmetov.slearnbackend.model.dto;

import ahmetov.slearnbackend.model.course.Quiz;
import ahmetov.slearnbackend.model.course.TrainingSession;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Lob;
import java.util.List;

@Getter
@Setter
public class TestDto {
    private Long id;

    private String enemyTalk;

    List<Quiz> quizList;

    private TrainingSession trainingSession;
}
