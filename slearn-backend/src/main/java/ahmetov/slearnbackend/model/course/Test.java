package ahmetov.slearnbackend.model.course;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Getter
@Setter
@Table(name = "app_test")
public class Test {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Lob
    private byte[] enemy;

    private String enemyTalk;

    @OneToMany(mappedBy = "test", orphanRemoval = true)
    List<Quiz> quizList;

    @OneToOne
    @JoinColumn(name = "training_id", referencedColumnName = "id")
    @JsonIgnore
    private TrainingSession trainingSession;
}
