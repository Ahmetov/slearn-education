package ahmetov.slearnbackend.model.course;

import com.fasterxml.jackson.annotation.JsonIgnore;
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
    @JsonIgnore
    private List<TrainingSessionPart> trainingSessionParts;

    @ManyToOne
    @JoinColumn(name = "course_id", nullable = false)
    private Course course;

    @OneToOne(mappedBy = "trainingSession", orphanRemoval = true)
    @JsonIgnore
    private Test test;
}
