﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace mongo.Models
{
    public class ProjetDatabaseSettings : IProjetDatabaseSettings
    {
        public string UsersCollectionName { get; set; }
        public string ProductsCollectionName { get; set; }
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
    }

}
