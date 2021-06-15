package ahmetov.slearnbackend.model.course;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Getter
@Setter
public class Course {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String description;

    @ManyToMany(mappedBy = "courses")
    private List<CourseCategory> courseCategories;

    @OneToMany(mappedBy = "course", orphanRemoval = true)
    @JsonIgnore
    private List<TrainingSession> modules;

    @OneToOne(mappedBy = "course", orphanRemoval = true)
    private FileDB image;
}
