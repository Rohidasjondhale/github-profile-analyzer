const axios = require("axios");

const db = require("../config/db");

exports.analyzeProfile = async (req, res) => {

  try {

    const { username } = req.params;

    // Fetch from GitHub API

    const githubResponse =
      await axios.get(
        `https://api.github.com/users/${username}`
      );

    const data = githubResponse.data;

    // Insert into database

    const sql = `
    INSERT INTO github_profiles
    (
      username,
      name,
      bio,
      avatar_url,
      github_url,
      public_repos,
      followers,
      following_count,
      account_created_at
    )

    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    db.query(
      sql,
      [
        data.login,
        data.name,
        data.bio,
        data.avatar_url,
        data.html_url,
        data.public_repos,
        data.followers,
        data.following,
        data.created_at,
      ],

      (err, result) => {

        if (err) {

          // Duplicate username handling

          if (
            err.code ===
            "ER_DUP_ENTRY"
          ) {

            return res.status(400).json({
              message:
                "Profile already analyzed",
            });
          }

          return res.status(500).json(err);
        }

        res.json({
          message:
            "Profile analyzed successfully",

          profile: data,
        });
      }
    );

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message:
        "GitHub User Not Found",
    });
  }
};

exports.getAllProfiles = (req, res) => {

  const sql =
    "SELECT * FROM github_profiles";

  db.query(sql, (err, result) => {

    if (err) {

      return res.status(500).json(err);
    }

    res.json(result);
  });
};

exports.getSingleProfile = (req, res) => {

  const { username } = req.params;

  const sql =
    "SELECT * FROM github_profiles WHERE username=?";

  db.query(
    sql,
    [username],

    (err, result) => {

      if (err) {

        return res.status(500).json(err);
      }

      if (result.length === 0) {

        return res.status(404).json({
          message:
            "Profile not found",
        });
      }

      res.json(result[0]);
    }
  );
};