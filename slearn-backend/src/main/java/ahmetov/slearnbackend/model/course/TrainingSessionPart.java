package ahmetov.slearnbackend.model.course;

import javax.persistence.*;

@Entity
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
