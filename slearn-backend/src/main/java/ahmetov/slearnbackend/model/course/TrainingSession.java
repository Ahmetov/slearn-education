package ahmetov.slearnbackend.model.course;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Getter
@Setter
public class TrainingSession {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    private String description;

    @OneToMany(mappedBy = "trainingSession", orphanRemoval = true)
    private List<TrainingSessionPart> trainingSessionParts;

    @ManyToOne
    @JoinColumn(name = "course_id", nullable = false)
    private Course course;
}
