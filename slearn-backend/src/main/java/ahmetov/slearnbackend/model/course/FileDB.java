package ahmetov.slearnbackend.model.course;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;

@Entity
@Table(name = "file")
@Getter
@Setter
public class FileDB {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String type;

    @Lob
    private byte[] data;

    @OneToOne
    @JoinColumn(name = "course_id", referencedColumnName = "id")
    @JsonIgnore
    private Course course;

    public FileDB(String name, String type, byte[] data) {
        this.name = name;
        this.type = type;
        this.data = data;
    }

    public FileDB() {
    }
}