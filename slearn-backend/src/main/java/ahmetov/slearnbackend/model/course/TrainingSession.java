package ahmetov.slearnbackend.model.course;

import javax.persistence.*;
import java.util.List;

@Entity
public class TrainingSession {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    @OneToMany(mappedBy = "trainingSession")
    private List<TrainingSessionPart> trainingSessionParts;

    @ManyToOne
    @JoinColumn(name = "course_id", nullable = false)
    private Course course;
}
