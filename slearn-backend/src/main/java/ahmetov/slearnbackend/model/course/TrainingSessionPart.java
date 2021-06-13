package ahmetov.slearnbackend.model.course;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
public class TrainingSessionPart {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String subtitle;

    private String content;

    private String image;

    @ManyToOne
    @JoinColumn(nullable = false, name = "training_session_id")
    private TrainingSession trainingSession;
}
