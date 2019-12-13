using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using Newtonsoft.Json;

namespace mongo.Models
{
    public class Products
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        [BsonElement("name")]
        [JsonProperty("Name")]
        public string Name { get; set; }

        [BsonElement("description")]
        [JsonProperty("Description")]
        public string Description { get; set; }

        [BsonElement("price")]
        [JsonProperty("Price")]
        public double Price { get; set; }

        [BsonElement("active")]
        [JsonProperty("Active")]
        public bool Active { get; set; }

        [BsonElement("stock")]
        [JsonProperty("Stock")]
        public int Stock { get; set; }

        [BsonRepresentation(BsonType.ObjectId)]
        [BsonElement("vendorID")]
        [JsonProperty("VendorID")]
        public string VendorID { get; set; }

    }
}
